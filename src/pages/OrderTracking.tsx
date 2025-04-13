
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Package, Truck, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  orderId: z.string().min(6, {
    message: "Order ID must be at least 6 characters.",
  }),
});

const OrderTracking = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderId: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Here you would implement actual order tracking
    // For now, we'll just show a console log
    console.log("Tracking order:", values.orderId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
              <p className="text-lg text-gray-700 mb-6">
                Enter your order ID to see the current status and estimated delivery date.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="orderId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your order ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  Track Order
                </Button>
              </form>
            </Form>

            {/* This would typically be shown conditionally based on a successful order lookup */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Sample Order Status</h3>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Order Confirmed</p>
                    <p className="text-sm text-gray-500">April 10, 2025</p>
                  </div>
                </div>
                
                <div className="absolute left-5 top-10 w-0.5 h-16 bg-gray-300"></div>
                
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Packed</p>
                    <p className="text-sm text-gray-500">April 11, 2025</p>
                  </div>
                </div>
                
                <div className="absolute left-5 top-34 w-0.5 h-16 bg-gray-300"></div>
                
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mr-4">
                    <Truck className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">In Transit</p>
                    <p className="text-sm text-gray-500">Estimated: April 14, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;
