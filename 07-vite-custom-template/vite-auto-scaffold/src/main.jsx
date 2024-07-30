import { StrictMode } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';
import AvatarListPage from './pages/AvatarList';

console.log(StrictMode)

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <AvatarListPage />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
