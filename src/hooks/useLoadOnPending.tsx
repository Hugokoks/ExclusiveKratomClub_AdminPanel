import { useEffect } from "react";
import { useFullScreenLoader } from "../context/FullScreenLoaderProvider";

export default function useLoadOnPending(isPending: boolean) {
  const { setLoadingState } = useFullScreenLoader();

  useEffect(() => {
    setLoadingState(isPending);
  }, [isPending]);

  return null;
}
