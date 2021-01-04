#include <iostream>
#include <cmath>
#include <climits>
using namespace std;

int main()
{
   unsigned long long int suma;
   unsigned long long int iCopie;
   for (unsigned long long int i=1;i<=ULLONG_MAX;i++)
   {
      iCopie = i;
      while (iCopie!=0)
      {
         suma += pow(iCopie%10,iCopie%10);
         iCopie/=10;
      }
      if (suma==i)
         cout<<i<<'\n';
      suma = 0;
   }
   return 0;
}
