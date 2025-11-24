"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Product } from "./sections/products";
import { UploadCloud, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "./ui/separator";

const formSchema = z.object({
  product: z.string().optional(),
  size: z.string().min(1, "Please select a size."),
  paperStock: z.string().min(1, "Please select a paper stock."),
  finish: z.string().min(1, "Please select a finish."),
  quantity: z.number().min(50, "Minimum quantity is 50."),
  artwork: z.any().optional(),
});

type PrintConfiguratorProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  product: Product | null;
};

export default function PrintConfigurator({
  isOpen,
  onOpenChange,
  product,
}: PrintConfiguratorProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: product?.name || "",
      size: "",
      paperStock: "14pt_matte",
      finish: "none",
      quantity: 1000,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Quote Request:", values);
    toast({
      title: "Quote Request Sent!",
      description: "We've received your request and will get back to you shortly.",
      action: <CheckCircle className="text-green-500" />,
    });
    onOpenChange(false);
    form.reset();
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4">
          <SheetTitle className="text-2xl font-bold tracking-tight">
            {product ? `Configure: ${product.name}` : "Get a Quote"}
          </SheetTitle>
          <SheetDescription>
            Fill out the details below to get an instant price estimate.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 overflow-y-auto">
            <div className="space-y-6 p-6">
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select a size" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="standard_bc">Standard Business Card (3.5" x 2")</SelectItem>
                        <SelectItem value="a5_flyer">A5 Flyer (5.8" x 8.3")</SelectItem>
                        <SelectItem value="a4_brochure">A4 Brochure (8.3" x 11.7")</SelectItem>
                        <SelectItem value="custom">Custom Size (Specify in notes)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paperStock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Paper Stock</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select paper stock" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="14pt_matte">14pt Cardstock - Matte</SelectItem>
                        <SelectItem value="16pt_gloss">16pt Cardstock - Glossy</SelectItem>
                        <SelectItem value="100lb_recycled">100lb Text - Recycled</SelectItem>
                        <SelectItem value="32pt_uncoated">32pt Uncoated - Extra Thick</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="finish"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Finish</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select a finish" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="spot_uv">Spot UV</SelectItem>
                        <SelectItem value="foil_stamping">Foil Stamping</SelectItem>
                        <SelectItem value="embossing">Embossing</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity: {field.value}</FormLabel>
                    <FormControl>
                      <Slider
                        min={50}
                        max={10000}
                        step={50}
                        onValueChange={(value) => field.onChange(value[0])}
                        defaultValue={[field.value]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="artwork"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Artwork</FormLabel>
                    <FormControl>
                       <div className="relative w-full">
                         <label htmlFor="artwork-upload" className="relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-muted">
                           <div className="flex flex-col items-center justify-center pt-5 pb-6">
                             <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                             <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                             <p className="text-xs text-muted-foreground">PDF, AI, PSD, PNG, JPG (MAX. 50MB)</p>
                           </div>
                         </label>
                         <Input id="artwork-upload" type="file" className="sr-only" {...field} />
                       </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <SheetFooter className="p-6 bg-secondary mt-6">
              <Button type="submit" className="w-full" size="lg">Add to Quote</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
