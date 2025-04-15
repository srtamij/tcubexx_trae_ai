
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CreditCard, Lock } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from '@/contexts/CartContext';

const formSchema = z.object({
  cardName: z.string().min(2, { message: "Please enter the cardholder's name" }),
  cardNumber: z.string().min(16, { message: "Please enter a valid card number" }),
  expiry: z.string().min(5, { message: "Please enter a valid expiry date (MM/YY)" }),
  cvv: z.string().min(3, { message: "Please enter a valid CVV" }),
  paymentMethod: z.enum(["card", "upi", "netbanking"], {
    required_error: "Please select a payment method",
  }),
});

const Checkout = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      paymentMethod: "card",
    },
  });

  const { getCartTotal } = useCart();
  const cartTotal = getCartTotal();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Payment submitted:", values);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                
                <div className="mb-6 flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">Secure Payment</span>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Payment Method</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="card" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Credit/Debit Card
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="upi" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  UPI Payment
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="netbanking" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Net Banking
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {form.watch("paymentMethod") === "card" && (
                      <>
                        <FormField
                          control={form.control}
                          name="cardName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cardholder Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    placeholder="0000 0000 0000 0000" 
                                    {...field}
                                    onChange={(e) => {
                                      const value = e.target.value.replace(/\s/g, "");
                                      const formattedValue = value.replace(/(\d{4})/g, "$1 ").trim();
                                      field.onChange(formattedValue);
                                    }}
                                    maxLength={19}
                                  />
                                  <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="expiry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="MM/YY" 
                                    {...field}
                                    onChange={(e) => {
                                      let value = e.target.value.replace(/\D/g, "");
                                      if (value.length > 2) {
                                        value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                                      }
                                      field.onChange(value);
                                    }}
                                    maxLength={5}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="cvv"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="123" 
                                    type="password"
                                    {...field} 
                                    maxLength={4}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </>
                    )}

                    {form.watch("paymentMethod") === "upi" && (
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Enter UPI ID</p>
                        <Input placeholder="example@upi" />
                      </div>
                    )}

                    {form.watch("paymentMethod") === "netbanking" && (
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Select your bank</p>
                        <select className="w-full p-2 border rounded">
                          <option>Select Bank</option>
                          <option>State Bank of India</option>
                          <option>HDFC Bank</option>
                          <option>ICICI Bank</option>
                          <option>Axis Bank</option>
                        </select>
                      </div>
                    )}
                    
                    <Button type="submit" className="w-full mt-4 bg-brand-purple hover:bg-brand-purple/90">
                      Pay ₹{cartTotal.toLocaleString()}
                    </Button>
                  </form>
                </Form>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>₹{cartTotal > 0 ? '99.00' : '0.00'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>₹{cartTotal > 0 ? (cartTotal * 0.06).toFixed(2) : '0.00'}</span>
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{cartTotal > 0 ? (cartTotal + 99 + (cartTotal * 0.06)).toFixed(2) : '0.00'}</span>
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

export default Checkout;
