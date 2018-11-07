open Bs_node_fetch

module Option = struct
  let unwrapUnsafely = function
    | Some v -> v
    | None -> raise (Invalid_argument "unwrapUnsafely called on None");  
end

let _ =
  Js.Promise.(
    fetch "https://dog.ceo/api/breeds/list/all"
    |> then_ Response.text
    |> then_ (fun text -> print_endline text |> resolve)
  )

let _ =
  Js.Promise.(
    fetchWithInit "https://dog.ceo/api/breeds/list/all" (RequestInit.make ~method_:Post ())
    |> then_ Response.text
    |> then_ (fun text -> print_endline text |> resolve)
  )
