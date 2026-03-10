import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// src/components/leads/LeadCaptureDialog.tsx
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "../ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import { LeadCaptureForm } from "./LeadCaptureForm"; // This component must exist and handle form fields
export function LeadCaptureDialog({ buttonText, buttonVariant = "default", buttonSize = "default", buttonClassName = "", buttonIcon, formType, title, description, extraData, defaultMessage, isOpen, // Destructure the new isOpen prop
onOpenChange, // Destructure the new onOpenChange prop
onSuccess, // Destructure the onSuccess prop
 }) {
    // Use internal state if isOpen and onOpenChange are not provided (for button-triggered usage)
    const [internalOpen, setInternalOpen] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);
    // Determine which 'open' state to use: controlled (from parent) or internal
    const controlledOpen = typeof isOpen === "boolean" ? isOpen : internalOpen;
    // Determine which 'setOpen' function to use: parent's callback or internal setter
    const setOpen = typeof onOpenChange === "function" ? onOpenChange : setInternalOpen;
    // Show success message, then close dialog after delay
    const handleSuccess = () => {
        setShowSuccess(true);
        // Auto-close after 3 seconds
        setTimeout(() => {
            setShowSuccess(false);
            setOpen(false);
            if (onSuccess) {
                onSuccess();
            }
        }, 3000);
    };
    // Manual close from success screen
    const handleCloseSuccess = () => {
        setShowSuccess(false);
        setOpen(false);
        if (onSuccess) {
            onSuccess();
        }
    };
    // Title mapping based on form type if not provided
    const getDefaultTitle = () => {
        switch (formType) {
            case "register":
                return "Register Your Interest";
            case "apply":
                return "Apply for Next Batch";
            case "bookCall":
                return "Schedule a Free Consultation";
            case "infoSession":
                return "Register for Info Session";
            case "contact":
                return "Contact Us";
            default:
                return "Contact Us";
        }
    };
    // Description mapping based on form type if not provided
    const getDefaultDescription = () => {
        switch (formType) {
            case "register":
                return "Fill out this form to register your interest in our program. Our team will reach out with more details.";
            case "apply":
                return "Submit your application for our next batch and take advantage of the exclusive 20% early bird discount.";
            case "bookCall":
                return "Schedule a free consultation with our program advisors to learn more about how our program can help you achieve your career goals.";
            case "infoSession":
                return "Register for our upcoming virtual info session on May 20, 2025 at 6:00 PM IST to learn more about our program.";
            case "contact":
                return "We'd love to hear from you. Fill out this form and we'll get back to you as soon as possible.";
            default:
                return "We'd love to hear from you. Fill out this form and we'll get back to you as soon as possible.";
        }
    };
    return (_jsxs(Dialog, { open: controlledOpen, onOpenChange: setOpen, children: [buttonText && (_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { variant: buttonVariant, size: buttonSize, className: `group ${buttonClassName}`, children: [buttonText, buttonIcon] }) })), _jsx(DialogContent, { className: "sm:max-w-md max-h-[80vh] md:max-h-[90vh] overflow-hidden", children: showSuccess ? (
                // Success State
                _jsxs("div", { className: "flex flex-col items-center justify-center py-8 px-4 text-center", children: [_jsx("div", { className: "mb-4 rounded-full bg-green-100 p-3", children: _jsx(CheckCircle2, { className: "h-12 w-12 text-green-600" }) }), _jsx(DialogTitle, { className: "text-2xl font-bold text-gray-900 mb-2", children: "Thank You!" }), _jsx(DialogDescription, { className: "text-base text-gray-600 mb-6", children: "Your information has been submitted successfully. Our team will contact you soon." }), _jsx(Button, { onClick: handleCloseSuccess, className: "bg-primary hover:bg-primary/90 text-white px-8", children: "Close" }), _jsx("p", { className: "text-xs text-gray-400 mt-4", children: "This window will close automatically in 3 seconds" })] })) : (
                // Form State
                _jsxs(_Fragment, { children: [_jsxs(DialogHeader, { className: "pb-2", children: [_jsx(DialogTitle, { children: title || getDefaultTitle() }), _jsx(DialogDescription, { children: description || getDefaultDescription() })] }), _jsx("div", { className: "overflow-y-auto pr-2 max-h-[calc(80vh-10rem)] md:max-h-[calc(90vh-10rem)]", children: _jsx(LeadCaptureForm, { formType: formType, onSuccess: handleSuccess, onCancel: () => setOpen(false), extraData: extraData, defaultMessage: defaultMessage }) })] })) })] }));
}
//# sourceMappingURL=LeadCaptureDialog.js.map