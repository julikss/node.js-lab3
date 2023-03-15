import {useNavigate} from 'react-router-dom';

const ModeComponent = () => {
  const router = useNavigate();
  return(
    <div>
      <div className="btn" onClick={() => router('/admin')}>Admin</div>
      <div className="btn" onClick={() => router('/guest')}>Guest</div>
    </div>
  )
}

export default ModeComponent;