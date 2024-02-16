import Navigation from "@/components/Navigation";
import { introduceHref } from "@/storage/href";

export default function introdce() {
  return (
    <>
      <Navigation props={introduceHref} />
      <main id="main"></main>
    </>
  );
}
