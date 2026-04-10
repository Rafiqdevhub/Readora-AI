import Link from "next/link";
import Image from "next/image";
import { BookCardProps } from "@/types";

const BookCard = ({ title, author, coverURL, slug }: BookCardProps) => {
  return (
    <Link href={`/books/${slug}`} className="group block h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-(--border-subtle) bg-[linear-gradient(to_bottom,var(--bg-tertiary),white_42%,var(--bg-primary))] p-3 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-(--border-medium)">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-(--bg-secondary)/70 blur-2xl transition-transform duration-300 group-hover:scale-125" />

        <figure className="relative z-10 flex h-full flex-col">
          <div className="relative overflow-hidden rounded-2xl border border-[#eadfcb] bg-[linear-gradient(165deg,#fff_0%,#f8eddc_100%)]">
            <div className="absolute left-2 top-2 z-20 rounded-full border border-[#d9c4a4] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#69432f]">
              Document
            </div>

            <div className="flex h-52.5 items-center justify-center p-4 md:h-60">
              <Image
                src={coverURL}
                alt={title}
                width={150}
                height={220}
                className="h-45 w-auto rounded-lg object-cover shadow-(--shadow-book) transition-transform duration-300 group-hover:scale-[1.03] md:h-51.25"
              />
            </div>

            <div
              className="pointer-events-none absolute -left-1/3 top-0 z-20 h-full w-[46%] bg-[linear-gradient(120deg,rgba(255,255,255,0),rgba(255,255,255,0.55),rgba(255,255,255,0))] transition-transform duration-700 transform-[translateX(-180%)_skewX(-16deg)] group-hover:transform-[translateX(340%)_skewX(-16deg)]"
              aria-hidden="true"
            />
          </div>

          <figcaption className="mt-4 flex flex-1 flex-col gap-1.5 px-1 md:mt-5">
            <h3 className="line-clamp-2 font-serif text-base font-semibold leading-[1.35] text-[#212a3b] md:text-xl">
              {title}
            </h3>
            <p className="line-clamp-1 text-sm font-medium text-[#3d485e] md:text-base">
              {author}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#663820] opacity-80 transition-opacity group-hover:opacity-100 md:text-sm">
              Open Book
            </p>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};
export default BookCard;
