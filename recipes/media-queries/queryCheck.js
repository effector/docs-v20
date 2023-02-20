//@flow

export function orientationCheck(
  props: {
    portrait?: boolean,
    landscape?: boolean,
    ...
  },
  queries: {
    portrait: boolean,
    ...
  },
): boolean {
  //if there no constraint on orientation
  if (!props.portrait && !props.landscape) return true
  return (
    (props.portrait && queries.portrait) ||
    //$todo
    (props.landscape && !queries.portrait)
  )
}

export function screenSizeCheck(
  props: {
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    ...
  },
  queries: {
    small: boolean,
    medium: boolean,
    large: boolean,
    ...
  },
): boolean {
  //if there no constraint on screen size
  if (!props.small && !props.medium && !props.large) return true
  return (
    (props.small && queries.small) ||
    (props.medium && queries.medium) ||
    //$todo
    (props.large && queries.large)
  )
}
