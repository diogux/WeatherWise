// components/SheetDemo.js
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SheetContentDemo from './sheet_content';  // Ensure you import the SheetContentDemo component

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-black/30 w-40'>Personalize Cards</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Cards</SheetTitle>
          <SheetDescription>
            Personalize your favorite 4 cards here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <SheetContentDemo />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save Changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SheetDemo;

