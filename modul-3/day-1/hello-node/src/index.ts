import http, { IncomingMessage, ServerResponse } from "http";

const PORT: number = 8000; // menentukan port lokasi server akan berjalan

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com" },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // res.writeHead(200, { "Content-Type": "text/plain" }); // mengatur status code dan header respons
    // res.write("Hello World"); // mengirimkan pesan ke client menggunakan res.write
    // res.end(); // menandai bahwa pengiriman respons sudah selesai

    // untuk mendefinisikan url endpoint dan method request yang mau digunakan
    const url: string = req.url || "";
    const method: string = req.method || "";

    // 1. Endpoint GET /api/users (Ambil semua data user)
    if (url === "/api/users" && method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(users));
      return res.end();
    }

    // 2. Endpoint GET /api/users/:id (Ambil user berdasarkan id tertentu)
    if (url.startsWith("/api/users/") && method === "GET") {
      // mengambil nilai ID dari segmen URL terakhir
      const urlSegments = url.split("/");
      const idString = urlSegments[urlSegments.length - 1];
      const userId = parseInt(idString as string, 10);

      // mencari user berdasarkan ID
      const foundUser = users.find((user: User) => user.id === userId);

      if (foundUser) {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(foundUser));
      } else {
        res.writeHead(404, { "content-type": "application/json" });
        res.write(JSON.stringify({ message: "User not found" }));
      }

      return res.end();
    }

    // handling route yang tidak ditemukan (404)
    res.writeHead(404, { "content-type": "application/json" });
    res.write(
      JSON.stringify({ message: "Route not found", status: res.statusCode }),
    );
    res.end();
  },
);

// menjalankan server pada port yang ditetapkan
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
