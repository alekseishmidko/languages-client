import { Button } from "@gravity-ui/uikit";
import { Globe } from "@gravity-ui/icons";
import Link from "next/link";
import { APP_ROUTES } from "@/app/constants/route.constants";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-2  bg-white sticky top-0">
      <div className="flex space-x-2">
        <Button size="l" view="flat-success">
          Глоссарии
        </Button>
        <Button size="l" view="flat-success">
          Списки
        </Button>
        <Button size="l" view="flat-success">
          Курсы
        </Button>
        <Button size="l" view="flat-success">
          Словарь
        </Button>
      </div>

      <div className="flex space-x-4 mr-2">
        <Link href={APP_ROUTES.AUTH}>
          <Button size="l" pin="round-round" selected view="outlined-success">
            Вход
          </Button>
        </Link>
      </div>
    </header>
  );
}
