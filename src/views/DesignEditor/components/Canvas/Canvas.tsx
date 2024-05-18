import React,{useEffect} from "react"
import { Canvas as LayerhubCanvas } from "@layerhub-io/react"
import Playback from "../Playback"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import ContextMenu from "../ContextMenu"
import { useActiveObject, useContextMenuRequest, useEditor } from "@layerhub-io/react"

const Canvas = () => {
  const { displayPlayback } = useDesignEditorContext()
  const editor = useEditor()

  useEffect(() => {
    const canvasToRemove = document.querySelectorAll('.canvas-container .upper-canvas')[1];

    if (canvasToRemove) {
      canvasToRemove.remove();
    }
  }, []); 

 
  return (
    <div style={{ flex: 1, display: "flex", position: "relative" }}>
      {displayPlayback && <Playback />}
      <ContextMenu />
      <LayerhubCanvas
        config={{
          background: "#f1f2f6",
          controlsPosition: {
            rotation: "BOTTOM",
          },
          shadow: {
            blur: 4,
            color: "#fcfcfc",
            offsetX: 0,
            offsetY: 0,
          },
        }}
      />
    </div>
  )
}

export default Canvas
