import React from "react"
import { useEditor } from "@layerhub-io/react"
import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import AngleDoubleLeft from "~/components/Icons/AngleDoubleLeft"
import Scrollable from "~/components/Scrollable"
import { pixabayImages } from "~/constants/mock-data"
import { useSelector } from "react-redux"
import { selectPixabayResources } from "~/store/slices/resources/selectors"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"

const Pixabay = () => {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()

  const pixabayResources = [
    {
        "src": "https://pixabay.com/get/g50b1ffa0440c30993ee1da858d2e9b319105214b61513bb080c935dfd0336b39134f748f77040869aa2f760a4b0f365b8ac4419eecba6d95d957fbce953b86d0_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2023/07/08/04/58/sunset-8113697_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g1e68e07c9a3c5f9b32aa14b0fd47e76b17e851fc06a9563ddab306b06c8edf24875e0997a5da23acfbbe44a15b26eb197c823f10319e7eda9d5d2b3ff7856ad3_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2021/05/29/03/00/beach-6292382_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g9e5a60f01d10a49089da119b9098cf43fc065c43cecaf8319709a61639b7aa0931d1b397995290ee6e1d6237ec1eb73dd8b044349f6ee22286a4291dc37f71db_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2018/03/02/21/49/waves-3194377_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g9a9b6290d816e01f5c2ab7112a9e69dd49ac8d227a30e37aa94ca2a15b215b04a7f7e71ffaaf4affdff006881b630462bded0c2e2251b04d16dbc2e678857219_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/gfcfd7a5f2fe81be4132a1bc3df2bf8cda6880c077cdff23e65b02d9ab16a18beca54a8fdfb79f9ebb21a8b1866f6c7ffa1aacacd1b31677119c961f42028e8e5_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2020/02/02/23/50/beach-4814418_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g497420a354180b9e79c2fb8c15dab6b4c3723ae2eab911e274f72c0764b926c3d77bc950d7f2726214b64e87bfd8771f748ade56ad265979b8994bc8c550654f_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2020/06/05/22/21/beach-5264739_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g3463e58d6e51c129d9352b9673eaf42c0b417f41889f616507991559dfa3e37a046cbafb5907cfeb614ba3814ce35f3b9d1d93366f12157726326bee7714768e_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2019/03/04/11/24/dunes-4033821_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g2c9ccbe7512ee08ca61a426076c042821060d7343fdd7bb5aa5b38d24fbe2b2c5118043c06a5c0a6f2234407a6ec12f186a130e59c2dbbc3019c8dbbcf4b468c_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2023/09/05/16/40/sunrise-8235464_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/gd0ba1b909d147559db85c2a7d055b912111c4661dcf3943d491f3b0bf68ab1809659c056ff84bcbae17649bc5a7e0a849359d354dce9a1fa91973cef583f2f1f_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2017/10/30/14/57/thin-2902686_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/gd3f99bb7a93260d75d70cf81414eb2322707789f6fdb0579ea6a076aa4f36417f3127a35ea98c1e8ca38be7e37bf9f78287685682644afbc62909c7975a37ed4_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2023/01/23/17/41/hut-7739262_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/gda8ed3ddb46d2147203877969b256504647906c455c3137a188f21f92d663f27c5ac5ca2013443fb7957e5a06c24bed1da12ca4716e1474ae52b8db395ecf37a_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2020/03/16/19/02/beach-4938039_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g224cc26f1677b6254a996bbc874d63ee93668d771db986231952f0fdc82971844538ee431a304c776bc3dd9ca0b979be_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g0883496ca0e18f2938968e8bcd67d7dad702c47ce11b1f53c0b2b021c2ffa987b50a746a26833178f9fa1678d660c0a021c6e840b7d6b47143ca97ed361c05f6_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2021/10/05/14/32/ocean-6682870_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g5cc33236bf56caed8b06d444024195a81f6e6edd4be5ff2c906225fc557d915a966221d8d4e8133217d876f586918e9b32746747b3c9b3b9168f4f206d649eb6_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2018/01/05/02/40/shellfish-3062011_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g125b6781939edaa07f410c25378587f7a5b86f97122a30705bc2381bd4f5c5d52b108f79b0d229b2460d29ce77138ffc8f21c05d0b23bef62e43442e0e52f674_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2020/08/31/09/33/beach-5531919_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g933b9420a8a96a8ff9d74b1d12521f42cac0b5fe86e1e77b5dbafec32959764c3def4d8c63f9ace7bc893c0ee5f7eb023f5e47bee385b09ad2d01de36585e135_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2021/09/29/12/58/sand-6667422_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g910241b2a1ee18e303b514c1d75a01ae8ef114d6b8da2f08acb83c23a279720acbdeca2f4d166c33649e81b6415f28bdcd9ebdf7b44e483f5e8e04ba61e89df8_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2018/03/16/20/13/seagull-3232350_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g2d8c4b8b2bb2aeaf85c7cbfb9b9fc0427edb09e54b531a43b6d9b82ba1d9a40bd4dc43f34204430f72ae5de5cafbef8d6eb9a26e7adf54be82b93ddfcbdaa70b_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2019/03/18/17/58/waves-4063684_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g136f768a3b15ee7e22400ed06d2f7dc361434b35697b93f04140f6cb2786ec7ecf5e43d039e8e635bc6fbbd3eab9e71d313e6ae0b55901b372ba62e079bc02b0_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2019/03/20/15/20/beach-4068773_150.jpg"
    },
    {
        "src": "https://pixabay.com/get/g3b87e5867ed9203947e517776507b2fa5a6a3c52e58df5d5b73b09d93be885eb3d57bb75b8797d6649bf88960181f46d6f57d255c78cd91d5ab92bbfd32813df_1280.jpg",
        "preview": "https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_150.jpg"
    }
]
  const addObject = React.useCallback(
    (url: string) => {
      if (editor) {
        const options = {
          type: "StaticImage",
          src: url,
        }
        editor.objects.add(options)
      }
    },
    [editor]
  )
  console.log(pixabayResources);
  
  return (
    <Block style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Block
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          justifyContent: "space-between",
          padding: "1.5rem",
        }}
      >
        <Block>Pixabay</Block>

        <Block onClick={() => setIsSidebarOpen(false)} style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        <Block padding="0 1.5rem">
          <div style={{ display: "grid", gap: "0.5rem", gridTemplateColumns: "1fr 1fr" }}>
            {pixabayResources.map((image, index) => {
              return <ImageItem key={index} onClick={() => addObject(image.src)} preview={image.preview} />
            })}
          </div>
        </Block>
      </Scrollable>
    </Block>
  )
}

const ImageItem = ({ preview, onClick }: { preview: any; onClick?: (option: any) => void }) => {
  const [css] = useStyletron()
  return (
    <div
      onClick={onClick}
      className={css({
        position: "relative",
        background: "#f8f8fb",
        cursor: "pointer",
        borderRadius: "8px",
        overflow: "hidden",
        "::before:hover": {
          opacity: 1,
        },
      })}
    >
      <div
        className={css({
          backgroundImage: `linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0.006) 8.1%,
          rgba(0, 0, 0, 0.022) 15.5%,
          rgba(0, 0, 0, 0.047) 22.5%,
          rgba(0, 0, 0, 0.079) 29%,
          rgba(0, 0, 0, 0.117) 35.3%,
          rgba(0, 0, 0, 0.158) 41.2%,
          rgba(0, 0, 0, 0.203) 47.1%,
          rgba(0, 0, 0, 0.247) 52.9%,
          rgba(0, 0, 0, 0.292) 58.8%,
          rgba(0, 0, 0, 0.333) 64.7%,
          rgba(0, 0, 0, 0.371) 71%,
          rgba(0, 0, 0, 0.403) 77.5%,
          rgba(0, 0, 0, 0.428) 84.5%,
          rgba(0, 0, 0, 0.444) 91.9%,
          rgba(0, 0, 0, 0.45) 100%)`,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          height: "100%",
          width: "100%",
          ":hover": {
            opacity: 1,
          },
        })}
      />
      <img
        src={preview}
        className={css({
          width: "100%",
          height: "100%",
          objectFit: "contain",
          pointerEvents: "none",
          verticalAlign: "middle",
        })}
      />
    </div>
  )
}

export default Pixabay
