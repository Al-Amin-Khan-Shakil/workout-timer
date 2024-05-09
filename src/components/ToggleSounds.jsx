import PropTypes from 'prop-types';

function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
      type="button"
    >
      {allowSound ? '🔉' : '🔇'}
    </button>
  );
}

ToggleSounds.propTypes = {
  allowSound: PropTypes.bool.isRequired,
  setAllowSound: PropTypes.func.isRequired,
};

export default ToggleSounds;
