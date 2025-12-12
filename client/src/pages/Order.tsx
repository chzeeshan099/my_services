import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Send } from "lucide-react";
import Layout from "@/components/Layout";

const orderFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\d*$/, "Phone number must contain only digits"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

export default function Order() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    
    try {
      const existingOrders = localStorage.getItem("orders");
      const orders = existingOrders ? JSON.parse(existingOrders) : [];
      
      const newOrder = {
        ...data,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      };
      
      orders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(orders));
      
      setShowSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error saving order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    form.setValue("phone", value);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 px-6 lg:px-8" data-testid="section-order">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500"
              data-testid="text-order-title"
            >
              Place Your Order
            </h1>
            <p 
              className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
              data-testid="text-order-description"
            >
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200" data-testid="card-order-form">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Please provide your details so we can reach out to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your phone number"
                            {...field}
                            onChange={handlePhoneInput}
                            inputMode="numeric"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Enter your email address" 
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md" data-testid="dialog-success">
          <DialogHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-center" data-testid="text-success-title">Submit Success</DialogTitle>
            <DialogDescription className="text-center" data-testid="text-success-message">
              Your order has been submitted successfully. We'll contact you soon!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button onClick={() => setShowSuccess(false)} data-testid="button-close-success">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
