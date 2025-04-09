import { Button } from "@/components/ui/button";
import { m } from "@/paraglide/messages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return <Button type="button">{m.hello_world()}</Button>;
}
