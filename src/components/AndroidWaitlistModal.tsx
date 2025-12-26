import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Smartphone, CheckCircle2, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

interface AndroidWaitlistModalProps {
  children: React.ReactNode;
}

export function AndroidWaitlistModal({ children }: AndroidWaitlistModalProps) {
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "already-added" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      if (data.alreadyAdded) {
        setSubmitStatus("already-added");
      } else {
        setSubmitStatus("success");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form and status when closing
      setTimeout(() => {
        form.reset();
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle className="text-xl">
              Join the Android Waitlist
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            Be the first to know when Twilight launches on Android. We'll notify
            you as soon as it's available.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "idle" || submitStatus === "loading" ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        type="email"
                        className="h-12 bg-secondary/50 border-secondary"
                        disabled={submitStatus === "loading"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-12"
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </Form>
        ) : submitStatus === "success" || submitStatus === "already-added" ? (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {submitStatus === "already-added"
                ? "You're Already on the List!"
                : "You're on the List!"}
            </h3>
            <p className="text-muted-foreground text-sm">
              {submitStatus === "already-added"
                ? "We already have your email. We'll notify you when Twilight is available on Android."
                : "Thanks for joining! We'll send you an email as soon as Twilight is available on Android."}
            </p>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Something Went Wrong</h3>
            <p className="text-muted-foreground text-sm mb-4">{errorMessage}</p>
            <Button variant="outline" onClick={() => setSubmitStatus("idle")}>
              Try Again
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default AndroidWaitlistModal;
