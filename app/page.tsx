import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Input
          aria-label="Enter your CodeForces @username..."
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm md:text-base lg:text-lg", // Adjust font size for responsiveness
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Enter your CodeForces @username..."
          startContent={
            <span className="text-base text-default-400 pointer-events-none flex-shrink-0">
              @
            </span>
          }
          type="search"
          // Adjust height and padding for a larger input box
          style={{ height: "3.5rem", padding: "0.75rem" }}
        />
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Generate
        </Link>
      </div>
    </section>
  );
}
