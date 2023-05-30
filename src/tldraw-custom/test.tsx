const shapeUtils = {
  box: new BoxUtil(),
  circle: new CircleUtil(),
  text: new TextUtil(),
}

export function Test() {
  // ...

  return (
    <Renderer
      page={page}
      pageState={pageState}
      {...etc}
      shapeUtils={shapeUtils}
    />
  )
}
