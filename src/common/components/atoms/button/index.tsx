import { ChildrenType } from "../../../types/reactTypes";

interface ButtonProps {
  className: string;
  children: keyof ChildrenType;
}

export default function Button(props: ButtonProps) {
  const { className, children } = props;

  return <button className={className}>{children}</button>;
}
