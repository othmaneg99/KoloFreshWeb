export default function InputA(props) {
  const style = {
    border: '2.5px solid #e4e8ef',
    borderRadius: '17px',
    height: '65px',
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: '18px',
    hover: {
      borderColor: 'red',
    },
    ...props.style,
  };

  return <input {...props} style={style} />;
}
