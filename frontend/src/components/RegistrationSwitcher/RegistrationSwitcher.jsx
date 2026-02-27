export default function RegistrationSwitcher({
  registeredComponent = <></>,
  unregisteredComponent = <></>
}) {
  const isUserLoggedIn = typeof window !== 'undefined' && Boolean(window.localStorage.getItem('authToken'));
  return isUserLoggedIn ? registeredComponent : unregisteredComponent;
}