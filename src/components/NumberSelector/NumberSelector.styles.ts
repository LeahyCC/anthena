import { css } from '@emotion/react'

// These styles are a bit quick and dirty, but they work for the example.

const styles = {
  container: css({
    position: 'relative',
    width: 120,
    height: 40,
    borderBottom: '1px solid #323456',
  }),
  title: css({
    color: '#323456',
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 16,
  }),
  buttonContainer: css({
    position: 'absolute',
    backgroundColor: 'white',
    width: 20,
    right: 0,

    'button:first-of-type': {
      marginBottom: 3,
    },
  }),
  button: css({
    width: 16,
    height: 16,
    border: '1px solid #939292',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#eee',
    },
  }),
  input: css({
    position: 'absolute',
    color: '#707070',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    border: 'none',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    '&:focus': {
      outline: 'none',
    },
  }),
}

export default styles
