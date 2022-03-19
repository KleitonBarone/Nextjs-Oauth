import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {session ? (
        <>
          <div>
            <p>Signed in as {session.user.email}</p>
            <p style={{ textAlign: "center" }}>
              <button onClick={() => signOut()}>Sign out</button>
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>Not signed in</p>
            <p style={{ textAlign: "center" }}>
              <button onClick={() => signIn()}>Sign in</button>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
