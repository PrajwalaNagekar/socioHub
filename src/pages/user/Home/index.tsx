import React from 'react';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-in fade-in zoom-in duration-500">
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-inner">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Welcome to SocioHub
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Your new home for connecting, sharing, and discovering amazing content.
        </p>
      </div>
    </div>
  );
};

export default Index;