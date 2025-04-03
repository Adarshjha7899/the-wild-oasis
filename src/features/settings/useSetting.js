import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],/* iss key ko ek array ke andar string chahiyay and yeh Fn asynchronous function return karega */
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}