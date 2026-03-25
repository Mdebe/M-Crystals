import axios from "axios";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const response = await axios.post(
      "https://api.replicate.com/v1/predictions",
      {
        version:
          "db21e45d987e8862c0f64bca2938e9e18efa7b7732c22c5a96e045b1225d8df4", // stable-diffusion
        input: {
          prompt,
        },
      },
      {
        headers: {
          Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const prediction = response.data;

    return Response.json(prediction);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Error generating image" });
  }
}