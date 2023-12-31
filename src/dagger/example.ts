import Client, { connect } from "../../deps.ts";
import { withNix } from "./steps.ts";

connect(async (client: Client) => {
  const ctr = withNix(
    client
      .pipeline("nix-installer")
      .container()
      .from("alpine")
      .withExec(["apk", "add", "curl"])
  );

  const result = await ctr.stdout();

  console.log(result);
});
