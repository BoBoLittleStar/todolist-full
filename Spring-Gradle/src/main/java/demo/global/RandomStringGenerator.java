package demo.global;

import java.util.Random;

public class RandomStringGenerator {
	private static Random random = new Random(1L);

	public static String nextString(int length) {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < length; i++) {
			int j = random.nextInt(52);
			sb.append(Character.toString((char) (j <= 25 ? 'A' + j : 'a' + j - 26)));
		}
		return sb.toString();
	}
}