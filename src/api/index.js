import { IMAGES_LIST } from "./images";

export const fetchImages = new Promise((resolve, reject) => {
  resolve({
    data: {
      imageOptions: [
        "https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=c79d25a2c6e58ffa114d6b5c0b15ce78",
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093",
        "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ftheprideoflondon.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1233041948-850x560.jpeg",
        "https://tmssl.akamaized.net/images/foto/normal/douglas-tanque-fc-pacos-de-ferreira-1594372024-43118.jpg?lm=1594372022",
      ],
    },
  });
});
