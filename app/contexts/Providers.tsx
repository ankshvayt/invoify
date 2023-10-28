"use client";

import React from "react";

// RHF
import { FormProvider, useForm } from "react-hook-form";

// Zod
import { zodResolver } from "@hookform/resolvers/zod";

// Schema
import { InvoiceSchema } from "@/lib/schemas";

// Context
import { InvoiceContextProvider } from "@/app/contexts/InvoiceContext";

// Types
import { InvoiceType } from "@/app/types/types";

// Variables
import { FORM_DEFAULT_VALUES } from "@/lib/variables";

type ProvidersProps = {
    children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
    const form = useForm<InvoiceType>({
        resolver: zodResolver(InvoiceSchema),
        defaultValues: FORM_DEFAULT_VALUES,
    });

    return (
        <FormProvider {...form}>
            <InvoiceContextProvider>{children}</InvoiceContextProvider>
        </FormProvider>
    );
};

export default Providers;
