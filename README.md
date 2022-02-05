# node-dh
Simple Diffie-Hellman Key Exchange based on cyclic groups

Choose secure parameters for the generator "g", the prime "p" and calculate a public key "A" using a corresponding private key.
Use HTTP POST to http://localhost:3000/exchange including the parameters. 

You may pass your private key directly in the code or via process.env.key.

Example:

$ curl -X POST -d '{"g":5, "p":29, "A": 3}' "localhost:3000/exchange" -H "Content-Type: application/json"
