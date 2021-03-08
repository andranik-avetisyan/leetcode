//Two Sum - easy
class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        vector<int> arr(2);
        for (int i = 0; i < nums.size(); i++)
        {
            for (int j = i + 1; j < nums.size(); j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    arr[0] = i;
                    arr[1] = j;
                }
            }
        }
        return arr;
    }
};

//Reverse Integer - easy
class Solution
{
public:
    int reverse(int x)
    {
        int result = 0;
        while (x != 0)
        {
            int temp = x % 10;
            x = x / 10;
            if (result > INT_MAX / 10 || (result == INT_MAX / 10 && temp > 7))
                return 0;
            if (result < INT_MIN / 10 || (result == INT_MIN / 10 && temp < -8))
                return 0;
            result = result * 10 + temp;
        }
        return result;
    }
};

//Palindrome Number - easy
class Solution
{
public:
    bool isPalindrome(int x)
    {
        if (x < 0 || x % 10 == 0 & x != 0)
        {
            return false;
        }

        int revert = 0;
        while (x > revert)
        {
            revert = revert * 10 + x % 10;
            x = x / 10;
        }
        return x == revert || x == revert / 10;
    }
};

