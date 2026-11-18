import React from "react";
import {
  AbsoluteFill,
  Composition,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  registerRoot,
} from "remotion";

const scenes = [
  {
    image: "pink-model.jpg",
    title: "কিউট ক্যাট প্রিন্ট হুডি!",
    subtitle: "স্টাইল ও আরামের দারুণ কম্বিনেশন",
  },
  {
    image: "lavender-model.jpg",
    title: "দুটি সুন্দর কালার",
    subtitle: "পিংক ও ল্যাভেন্ডার",
  },
  {
    image: "pink-product.jpg",
    title: "প্রিমিয়াম ফ্লিস ফেব্রিক",
    subtitle: "নরম, আরামদায়ক ও উষ্ণ",
  },
  {
    image: "lavender-product.jpg",
    title: "কিউট ক্যাট ডিজাইন",
    subtitle: "সামনে সুন্দর ক্যাট প্রিন্ট ও পকেট",
  },
  {
    image: "pink-model.jpg",
    title: "প্রতিদিনের জন্য পারফেক্ট",
    subtitle: "স্টাইলিশ লুক, দারুণ আরাম",
  },
  {
    image: "lavender-model.jpg",
    title: "আপনার পছন্দের কালার বেছে নিন",
    subtitle: "M, L ও XL সাইজ পাওয়া যাচ্ছে",
  },
  {
    image: "pink-product.jpg",
    title: "১০০% কালার ও ফেব্রিক গ্যারান্টি",
    subtitle: "যত্নের সঙ্গে ব্যবহার করুন",
  },
  {
    image: "lavender-product.jpg",
    title: "নিয়মিত দাম ৳১,১৯০",
    subtitle: "এখন অফার মূল্য মাত্র ৳৬৯০",
  },
  {
    image: "pink-model.jpg",
    title: "অর্ডার করুন এখনই!",
    subtitle: "ক্যাশ অন ডেলিভারি | ফোন: 01775319360",
  },
];

const ProductAd = () => {
  const frame = useCurrentFrame();
  const sceneDuration = 150;
  const sceneIndex = Math.min(
    Math.floor(frame / sceneDuration),
    scenes.length - 1
  );
  const scene = scenes[sceneIndex];
  const localFrame = frame % sceneDuration;

  const zoom = interpolate(
    localFrame,
    [0, sceneDuration],
    [1, 1.12],
    { extrapolateRight: "clamp" }
  );

  const opacity = interpolate(
    localFrame,
    [0, 20, 125, 150],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#170d20" }}>
      <AbsoluteFill style={{ opacity }}>
        <Img
          src={staticFile(scene.image)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${zoom})`,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 55,
          paddingBottom: 150,
          background:
            "linear-gradient(transparent 35%, rgba(15,5,20,0.92) 100%)",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 62,
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 3px 8px black",
            marginBottom: 22,
          }}
        >
          {scene.title}
        </div>

        <div
          style={{
            color: "#ffe4f1",
            fontSize: 37,
            textAlign: "center",
            marginBottom: 35,
          }}
        >
          {scene.subtitle}
        </div>

        {sceneIndex === 7 && (
          <div
            style={{
              color: "#ffe16b",
              fontSize: 78,
              fontWeight: "bold",
            }}
          >
            মাত্র ৳৬৯০
          </div>
        )}

        {sceneIndex === 8 && (
          <div
            style={{
              color: "#ffe16b",
              fontSize: 38,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            আজই অর্ডার করুন
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const RemotionRoot = () => (
  <Composition
    id="ProductAd"
    component={ProductAd}
    durationInFrames={1350}
    fps={30}
    width={1080}
    height={1920}
  />
);

registerRoot(RemotionRoot);
