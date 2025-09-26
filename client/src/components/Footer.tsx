export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pranitha Pothuguntla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}