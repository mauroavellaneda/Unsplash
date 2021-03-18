import mockAxios from "axios";
import unsplash from "../modules/data";
const API_KEY = process.env.REACT_APP_API_KEY;

it("calls axios and returns images", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: ["mountains.jpg"],
      },
    })
  );
  const images = await unsplash("images");

  expect(images).toEqual({ data: { results: ["mountains.jpg"] } });
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=10`
  );
});
