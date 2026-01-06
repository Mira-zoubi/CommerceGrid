import { useSpring, animated } from "@react-spring/web";

function AnimatedCounter({ value }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: { duration: 1200 },
  });

  return (
    <animated.span>
      {number.to((n) => Math.floor(n))}
    </animated.span>
  );
}

export default AnimatedCounter;
