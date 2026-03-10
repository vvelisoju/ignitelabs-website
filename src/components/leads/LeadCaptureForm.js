import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";
import { Loader2 } from "lucide-react";
// Form schema with validation
const leadFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    // email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    source: z.string().min(1, { message: "Please select how you found us" }),
    interestedIn: z.string().min(1, { message: "Please select an option" }),
    message: z.string().optional(),
});
export function LeadCaptureForm({ formType, onSuccess, onCancel, extraData, defaultMessage, }) {
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(leadFormSchema),
        defaultValues: {
            name: "",
            // email: "",
            phone: "",
            source: "Website",
            interestedIn: "",
            message: defaultMessage || "",
        },
    });
    const isSubmitting = form.formState.isSubmitting;
    // Get form title and button text based on form type and extraData
    const getFormConfig = () => {
        switch (formType) {
            case "register":
                // If batch info is available, customize the form title and note
                if (extraData?.batchId && extraData?.batchName) {
                    return {
                        title: `Register for ${extraData.batchName}`,
                        buttonText: "Register Now",
                        noteText: `Secure your spot in this batch starting ${extraData.batchStartDate
                            ? new Date(extraData.batchStartDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
                            : "soon"}`,
                    };
                }
                return {
                    title: "Register Your Interest",
                    buttonText: "Register Now",
                    noteText: "Secure your spot in our first batch",
                };
            case "apply":
                return {
                    title: "Apply for Next Batch",
                    buttonText: "Submit Application",
                    noteText: "Limited seats available with 20% early bird discount",
                };
            case "bookCall":
                return {
                    title: "Schedule a Free Consultation",
                    buttonText: "Book Your Call",
                    noteText: "Our team will contact you to confirm the time",
                };
            case "infoSession":
                return {
                    title: "Register for Info Session",
                    buttonText: "Confirm Registration",
                    noteText: "May 20, 2025 at 6:00 PM IST - Virtual Session",
                };
            case "contact":
                return {
                    title: "Contact Us",
                    buttonText: "Submit",
                    noteText: "We'll get back to you shortly",
                };
            default:
                return {
                    title: "Contact Us",
                    buttonText: "Submit",
                    noteText: "We'll get back to you shortly",
                };
        }
    };
    const { title, buttonText } = getFormConfig();
    const onSubmit = async (data) => {
        try {
            // Build payload for the external enquiry API
            const enquiryData = {
                source: "ignitelabs",
                name: data.name,
                phone: data.phone,
                interestedIn: data.interestedIn,
                message: data.message || null,
                formType,
                extraData: extraData || null,
            };
            // Send to Invoice App external enquiry endpoint (public, no auth needed)
            const apiBaseUrl = import.meta.env.VITE_ENQUIRY_API_URL || '';
            const response = await fetch(`${apiBaseUrl}/external/enquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(enquiryData),
            });
            if (response.ok) {
                // Reset form
                form.reset();
                // Call success callback (dialog will show success modal)
                if (onSuccess) {
                    onSuccess();
                }
            }
            else {
                throw new Error("Failed to submit your information");
            }
        }
        catch (error) {
            console.error("Error submitting lead:", error);
            toast({
                title: "Something went wrong",
                description: "Failed to submit your information. Please try again later.",
                variant: "destructive",
            });
        }
    };
    return (_jsx("div", { className: "w-full mx-auto p-2 pt-0", children: _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { className: "mb-2", children: [_jsx(FormLabel, { className: "text-sm font-medium", children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Enter your full name", ...field, className: "h-10" }) }), _jsx(FormMessage, { className: "text-xs" })] })) }), _jsx(FormField, { control: form.control, name: "phone", render: ({ field }) => (_jsxs(FormItem, { className: "mb-2", children: [_jsx(FormLabel, { className: "text-sm font-medium", children: "Phone Number" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Enter your phone number", ...field, className: "h-10" }) }), _jsx(FormMessage, { className: "text-xs" })] })) }), _jsx(FormField, { control: form.control, name: "interestedIn", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "text-sm font-medium", children: "I'm interested in" }), _jsx(FormControl, { children: _jsxs("select", { ...field, className: "flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", children: [_jsx("option", { value: "", disabled: true, children: "Select an option" }), _jsx("option", { value: "final_year_project", children: "Final Year Project Training" }), _jsx("option", { value: "training", children: "Training Program" }), _jsx("option", { value: "internship", children: "Internship Opportunity" }), _jsx("option", { value: "certification", children: "Webinar Registration" }), _jsx("option", { value: "placement", children: "Placement Assistance" }), _jsx("option", { value: "fee_details", children: "Fee Structure" }), _jsx("option", { value: "general_info", children: "General Inquiry" })] }) }), _jsx(FormMessage, { className: "text-xs" })] })) }), _jsx(FormField, { control: form.control, name: "message", render: ({ field }) => (_jsxs(FormItem, { className: "mb-3", children: [_jsx(FormLabel, { className: "text-sm font-medium", children: "Message (Optional)" }), _jsx(FormControl, { children: _jsx(Input, { type: "Textarea", placeholder: "Any specific questions or comments?", ...field, className: "h-10" }) }), _jsx(FormMessage, { className: "text-xs" })] })) }), _jsxs("div", { className: "flex gap-2 pt-3", children: [_jsx(Button, { type: "submit", className: "w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300", disabled: isSubmitting, children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }), "Submitting..."] })) : (buttonText) }), onCancel && (_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, className: "flex-shrink-0 border-primary/20 hover:bg-primary/5", children: "Cancel" }))] }), _jsxs("p", { className: "text-center text-xs text-muted-foreground mt-4", children: ["By submitting, you agree to our", " ", _jsx("span", { className: "text-primary hover:underline cursor-pointer", children: "Privacy Policy" })] })] }) }) }));
}
//# sourceMappingURL=LeadCaptureForm.js.map