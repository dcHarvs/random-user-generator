import { IconReload } from "@tabler/icons-react";

interface RefreshButtonProps {
  onClick: () => void;
}

export default function RefreshButton({ onClick }: RefreshButtonProps) {
  return (
    <button
      className="border-none outline-none absolute -top-2 -right-2 p-2 rounded-full bg-blue-500 hover:bg-blue-600"
      onClick={onClick}
    >
      <IconReload
        className="font-semibold"
        size={24}
        color="white"
      />
    </button>
  )
}
