import React from "react"
import { Block } from "baseui/block"
import { useEditor } from "@layerhub-io/react"

const Graphic = () => {
  const editor = useEditor()
  const [loading, setLoading] = React.useState(true)
  const [state, setState] = React.useState({
    image: "",
  })

  const makePreview = React.useCallback(async () => {
    if (editor) {
      const template = editor.scene.exportToJSON()
      const image = (await editor.renderer.render(template)) as string
      setState({ image })
      setLoading(false)
    }
  }, [editor])

  React.useEffect(() => {
    makePreview()
  }, [editor])

  React.useEffect(() => {
    if (!loading && state.image) {
      const downloadImage = () => {
        const anchor = document.createElement("a");
        anchor.href = state.image;
        anchor.download = "preview.png";
        anchor.click();
      };

      downloadImage();
    }
  }, [loading, state.image]);


  return (
    <Block style={{ flex: 1, alignItems: "center", justifyContent: "center", display: "flex", padding: "5rem" }}>
      {!loading && <img width="auto" height="100%" src={state.image} style={{maxWidth:'40%'}}/>}
    </Block>
  )
}

export default Graphic
