"use client"
import { BackLink } from "@/shared/components/ui/back-link";
import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { Input } from "@/shared/components/ui/input";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { ImageUploader } from "@/shared/components/upload/image-uploader";
import { Save, Trash } from "lucide-react";

export default function CreateMemoryPage() {
    return (
        <PageWPadding>
            <Container className="space-y-6">
                <nav className="flex items-center justify-between gap-2">
                    <BackLink href="/memories" />
                    <div className="flex items-center gap-4">
                        <Save className="stroke-muted-foreground w-5 h-5 hover:stroke-accent cursor-pointer transition-all duration-200" strokeWidth={1.5} />
                        <Trash className="stroke-muted-foreground w-5 h-5 hover:stroke-destructive cursor-pointer transition-all duration-200" strokeWidth={1.5} />
                    </div>
                </nav>
                <section>
                    <Input
                        className="w-full bg-transparent! rounded-none border-0 text-xl p-0 pb-1 focus:outline-none "
                        placeholder="Nueva memoria"
                    />
                    <div className="mt-6 mb-8 space-y-4">
                        <ImageUploader
                            onChange={(url) => console.log(url)}
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full min-h-60 focus:outline-none resize-none"
                            placeholder="Descripción de la memoria"
                        />
                    </div>
                </section>
            </Container>
        </PageWPadding>
    )
}