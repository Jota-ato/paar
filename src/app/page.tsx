import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";

export default function Home() {
  return (
    <>
      <h1>Paar</h1>
      <Container>
        <p>buttons</p>
        <div className="grid grid-cols-4 gap-4">
          <Button>
            Log in
          </Button>
          <Button variant={'outline'}>
            Log in
          </Button>
          <Button variant={'secondary'}>
            Log in
          </Button>
          <Button variant={'link'}>
            Log in
          </Button>
        </div>
      </Container>
    </>
  );
}
