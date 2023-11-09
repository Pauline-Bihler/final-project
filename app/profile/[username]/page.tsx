type Props = {
  params: { username: string };
};

export default function UserProfilePage({ params }: Props) {
  // console.log('Check:', params);
  return (
    <div>
      <h1>You are currently logged-in</h1>
      <h2>{params.username}'s profile page</h2>
    </div>
  );
}
