export const Logo = ({
  className = '',
}: {
  className?: string;
}): JSX.Element => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 12Zm0 9q-.45 0-.863-.163t-.737-.487l-6.7-6.725q-.875-.875-1.288-2T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3q2.5 0 4.188 1.85T22 9.25q0 1.225-.425 2.35t-1.275 2l-6.725 6.75q-.325.325-.725.488T12 21Zm1-13q.25 0 .475.125t.35.325l1.7 2.55h4.15q.175-.425.262-.863t.088-.887q-.05-1.725-1.15-2.963t-2.75-1.237q-.775 0-1.488.3t-1.237.875l-.675.725q-.125.15-.325.238t-.4.087q-.2 0-.4-.087t-.35-.238l-.675-.725q-.525-.575-1.225-.9T7.85 5Q6.2 5 5.1 6.263T4 9.25q0 .45.075.888t.25.862H9q.25 0 .475.125t.35.325l.875 1.3l1.35-4.05q.1-.3.362-.5T13 8Zm.3 3.25l-1.35 4.05q-.1.3-.375.5t-.6.2q-.25 0-.475-.125t-.35-.325L8.45 13H5.9l5.925 5.925q.05.05.088.063T12 19q.05 0 .088-.013t.087-.062l5.9-5.925H15q-.25 0-.475-.125t-.375-.325l-.85-1.3Z"
      />
    </svg>
  );
};