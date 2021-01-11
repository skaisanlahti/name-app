function Bar(props) {
  if (!props.max || !props.value) return null;

  const { max, value } = props;
  const barSize = (value / max) * 100;

  return (
    <div className="bar-max">
      <div className="bar-value" style={{ width: `${barSize}%` }}></div>
    </div>
  );
}

export default Bar;
