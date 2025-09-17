/**
 * This file ensures that dynamic Tailwind classes used by tailwind-bridge
 * are included in the final CSS output. Tailwind v4 scans for class names
 * in source files, so we explicitly reference all dynamic classes here.
 */

export const DynamicClassReferences = () => {
  return (
    <div className="hidden">
      {/* Width classes for FUI element sizes */}
      <div className="w-[16px]" /> {/* xxs */}
      <div className="w-[24px]" /> {/* xs */}
      <div className="w-[32px]" /> {/* sm */}
      <div className="w-[40px]" /> {/* md */}
      <div className="w-[48px]" /> {/* lg */}
      <div className="w-[56px]" /> {/* xl */}
      <div className="w-[64px]" /> {/* xxl */}
      <div className="w-[72px]" /> {/* 3xl */}
      <div className="w-[80px]" /> {/* 4xl */}
      <div className="w-[96px]" /> {/* 5xl */}
      <div className="w-[112px]" /> {/* 6xl */}
      <div className="w-[128px]" /> {/* 7xl */}
      <div className="w-[144px]" /> {/* 8xl */}
      {/* Height classes for FUI element sizes */}
      <div className="h-[16px]" /> {/* xxs */}
      <div className="h-[24px]" /> {/* xs */}
      <div className="h-[32px]" /> {/* sm */}
      <div className="h-[40px]" /> {/* md */}
      <div className="h-[48px]" /> {/* lg */}
      <div className="h-[56px]" /> {/* xl */}
      <div className="h-[64px]" /> {/* xxl */}
      <div className="h-[72px]" /> {/* 3xl */}
      <div className="h-[80px]" /> {/* 4xl */}
      <div className="h-[96px]" /> {/* 5xl */}
      <div className="h-[112px]" /> {/* 6xl */}
      <div className="h-[128px]" /> {/* 7xl */}
      <div className="h-[144px]" /> {/* 8xl */}
    </div>
  );
};
