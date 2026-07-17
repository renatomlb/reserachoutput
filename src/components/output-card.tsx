import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ResearchOutput } from "@/lib/outputs";

export function OutputCard({ output }: { output: ResearchOutput }) {
  return (
    <Card className="group transition-colors hover:border-gold/40">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-foreground/50">
          <Badge
            variant="outline"
            className="border-gold/40 bg-gold/10 text-foreground/80"
          >
            {output.kind}
          </Badge>
          <span>{output.year}</span>
        </div>
        <CardTitle className="text-xl leading-snug font-semibold">
          {output.url ? (
            <a
              href={output.url}
              className="inline-flex items-start gap-1 text-foreground hover:text-gold-dim"
            >
              {output.title}
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-gold" />
            </a>
          ) : (
            output.title
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-foreground/65">
          {output.authors.join(", ")} · <span className="italic">{output.venue}</span>
        </p>
        <p className="text-sm text-foreground/80">{output.abstract}</p>
      </CardContent>
    </Card>
  );
}
