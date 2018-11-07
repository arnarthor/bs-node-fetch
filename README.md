# Bindings to fetch for [BuckleScript](https://github.com/bucklescript/bucklescript).

## Example

```ml
(* OCaml *)
let _ =
  Js.Promise.(
    fetch "/api/hellos/1"
    |> then_ Response.text
    |> then_ (fun text -> print_endline text |> resolve)
  )
```

```reason
/* Reason */
Js.Promise.(
  fetch "/api/hellos/1"
  |> then_ Response.text
  |> then_ (fun text => print_endline text |> resolve)
);
```

## Installation

```sh
npm install --save bs-node-fetch
```

Then add `bs-node-fetch` to `bs-dependencies` in your `bsconfig.json`:
```js
{
  ...
  "bs-dependencies": ["bs-node-fetch"]
}
```

## Usage
See usage examples in [`examples/examples.ml`](https://github.com/arnarthor/bs-node-fetch/blob/master/examples/examples.ml). The source is a [single file](https://github.com/arnarthor/bs-node-fetch/blob/master/src/bs_fetch.ml)!

## Alternatives

[`bs-fetch`](https://github.com/reasonml-community/bs-fetch) has a section explaining how to use that project on the server using [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch). I personally need to use node-fetch therefor I maintain these bindings.

## Credits

The initial bindings are a fork from [`bs-fetch`](https://github.com/reasonml-community/bs-fetch) with minor modifications for node-fetch. Credit to the authors of that package for a great foundation. 

Some minor additions have been made for node-fetch.
